import * as fs from 'fs'
import pkg from '@tonejs/midi';
const { Midi } = pkg;
const fileName = "Flower Dance-Dj Okawari"/////////////////////
//const fileName = "chord-symbols"
const midiData = fs.readFileSync(`score/${fileName}.mid`)
const midi = new Midi(midiData)


for (let trackNumber = 0; trackNumber < midi.tracks.length; trackNumber++) {

    const track = midi.tracks[trackNumber];
    const notes = track.notes;

    let ncSong = notes.map((e, i) => ([
        e.midi,
        Math.round(e.time * 1000),
        Math.round((e.time + e.duration) * 1000)
    ]));

    //Find chords(notes that occupy the same timestamp)
    const chords = [];
    for (let i = 0, j = 0; i < ncSong.length; i++) {
        if (i + 1 < ncSong.length && ncSong[i + 1][1] === ncSong[i][1]) continue
        else {
            // if (i - j > 0) {
            //ncSong.splice(j, i - j, [999, ncSong[j][1]]);
            chords.push([j, i]);
            // }
            j = i + 1;
        }
    }

    chords.reverse().forEach((e) => {
        ncSong.splice(e[0], e[1] - e[0] + 1, [
            [
                ncSong.slice(e[0], e[1] + 1).map((n) => n[0]),
                ncSong[e[0]][1],
                e[1] - e[0] + 1],
            [
                [0],
                ncSong[e[0]][2],
                1
            ]
        ]);
    })
    ncSong = ncSong.flat();

    let file = await fs.promises.open(`out/${fileName}_${trackNumber.toString()}.out`, "w")
    file.write(JSON.stringify(ncSong).replaceAll("[", "{").replaceAll("]", "}"))
    console.log('NZ IS JULAO')
    file.close()
}
console.log("Finish")