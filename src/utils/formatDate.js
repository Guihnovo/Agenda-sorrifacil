export default function formatDate(date){
    let formatDateReplace = date.replaceAll("-", "");
    const year = formatDateReplace.substring(0,4);
    const month = formatDateReplace.substring(4,6);
    const day = formatDateReplace.substring(6,8)

    const currentDate = day + '/' + month + '/' + year;
    return currentDate;
}