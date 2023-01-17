import React, {FC} from 'react';
import {IArticle} from "../types/types";
import {Button, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import '../App.scss';
import arrow from '../img/arrow2.svg';
import calendar from '../img/akar-icons_calendar.svg';
import {formateDate} from "../utils/dateConstructor";
import Keywords from "react-keywords";

interface ArticleItemProps {
    article: IArticle,
    value: string
    onClick: (article: IArticle) => void;
}

const ArticleItem: FC<ArticleItemProps> = ({article, value, onClick}) => {
    const shortDescription = article.summary.substring(0, 150);
    const formatted = formateDate(article)
    const highlight = (txt: string) => <span style={{ background: 'yellow' }}>{txt}</span>;

    return (
        <Card className='card'>
            <CardMedia
                className='cardMedia'
                image={article.imageUrl}
            />
            <CardContent className='cardContent'>
                <div className='contentData'>
                    <img src={calendar} alt={''}/>
                    <p>{formatted}</p>
                </div>
                <p className='contentTitle'>
                    <Keywords value={value} render={highlight}>
                        {article.title}
                    </Keywords>
                </p>
                <p className='contentText'>
                    <Keywords value={value} render={highlight}>
                        {shortDescription}
                    </Keywords>
                    {'...'}
                </p>
            </CardContent>
            <CardActions className='cardActions'>
                <Button onClick={() => onClick(article)}>
                    <span style={{fontFamily: 'Montserrat'}}>Read more</span>
                    <img src={arrow} style={{marginLeft: '7px'}} alt={''}/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ArticleItem;