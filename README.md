Hi!

如果你是为了某门课的大作业而找到这里的话，这说明某校祖传至少七年的开发板，连带着作业要求又往下传了一届。

这也说明我可以给你些小奖品（

安装`nodejs`并在该项目下使用`pnpm i`安装依赖包后，将midi文件放置在`score`下，并根据文件名修改 https://github.com/dzx-dzx/S800-NoteCompanion/blob/0b721123bb627c2df2fbf7420eb9245875501259/index.js#L4 。运行`node index.js`运行脚本，`out`目录会产生数个`.out`文件。将其中之一的内容代替:
https://github.com/dzx-dzx/S800/blob/49026ea35d56ae80a7c7bbc3fd99fb9ba8804fe3/exp2-1.c#L136

上板后，向串口发送`MUSIC PLAY`以播放音乐。

备注:
1. 代码有试图处理和弦的尝试，通过快速交错播放其中的各个音符。但听起来的效果其实挺差的，所以最好不要选有太多和弦的曲子。可以修改https://github.com/dzx-dzx/S800-NoteCompanion/blob/0b721123bb627c2df2fbf7420eb9245875501259/index.js#L37 来忽略和弦其它音。
2. 出于上述原因，没有合并多track到单独输出的打算。
3. 编译器会对文件大小有限制，从而限制曲目的长度。可以试试重定义 https://github.com/dzx-dzx/S800/blob/49026ea35d56ae80a7c7bbc3fd99fb9ba8804fe3/exp2-1.c#L129 的格式，减少占用体积。
