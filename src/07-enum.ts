export {} // 确保跟其他成员不冲突

enum typeDict {
    // 1 = '视频' // 枚举成员不能具有数值名。
    video = '视频',
    mp3 = '音频',
    link = '外链'
}

const course = {
    title:"喜马拉雅课程A",
    content:"学了都说好",
    type: typeDict.video
    // video 视频 mp3 音频 link 外链 
}