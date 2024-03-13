
export function getFullTime(time: string | number) {
    time = Number(time);
    return time < 10 ? ('0' + time) : time;
}

export function getFullDate(date: string) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = getFullTime(d.getMonth() + 1);
    const day = getFullTime(d.getDate());

    return `${year}-${month}-${day}`;
}

export function tranformContent(content: string){
    if(content.indexOf("\\n") >= 0){
      console.log('含有换行')
    }
    return content.replace(/\n/g,'<br/>');
}