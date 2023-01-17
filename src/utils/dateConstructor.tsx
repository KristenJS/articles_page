import React from 'react';
import {IArticle} from "../types/types";

export const formateDate = (article: IArticle) => {
    const d = new Date(article.publishedAt)
    const year = d.getFullYear() // 2019
    const date = d.getDate() // 23
    const monthIndex = d.getMonth()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const nth = (date: number) => {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
    const monthName = months[monthIndex]
    return `${monthName} ${date}${nth(date)}, ${year}`
}