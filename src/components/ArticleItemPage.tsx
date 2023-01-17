import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IArticle} from "../types/types";
import axios from "axios";
import {Button} from "@mui/material";
import arrow from '../img/arrow.svg'
import Loader from "./Loader";
type ArticleItemPageParams = {
    id: string;
}

const ArticleItemPage: FC = () => {
    const [article, setArticle] = useState<IArticle | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams<ArticleItemPageParams>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            setIsLoading(true)
            const response = await axios.get<IArticle>('https://api.spaceflightnewsapi.net/v3/articles/' + params.id)
            setArticle(response.data)
        } catch (e) {
            alert(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='articleContainer'>
            {isLoading
                ? <Loader/>
                : <>
                    <img className='articleImage' src={article?.imageUrl} alt=''/>
                    <div className='container'>
                        <div className='articleContent'>
                            <p className='articleTitle'>{article?.title}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium fugiat iste
                                reiciendis vero?
                                Accusantium dicta error esse, eum exercitationem ipsa libero, odit, omnis quam
                                recusandae reiciendis rem
                                vitae? Beatae, corporis doloribus fugit labore necessitatibus pariatur praesentium
                                recusandae sed.
                                Deserunt doloribus facere fugit ipsam labore, neque nihil sunt. Ab assumenda consectetur
                                consequuntur
                                debitis, ea explicabo fuga fugiat incidunt, iusto mollitia nihil nulla quae quis veniam
                                voluptate!
                                Accusantium amet atque dolores hic nostrum quasi quis repellendus. Atque blanditiis
                                dolore doloribus
                                eveniet impedit laborum, laudantium magnam sit. Animi architecto harum perferendis
                                quibusdam? Ad,
                                blanditiis, ducimus exercitationem, in iste itaque nam necessitatibus neque nesciunt
                                officiis tempore
                                voluptatem! Aliquam deserunt dolores earum eligendi et fugit iusto nostrum omnis
                                perferendis provident.
                            </p>
                            <p>
                                Aspernatur aut corporis debitis deleniti deserunt dolor dolore earum enim eum excepturi
                                harum inventore
                                iste itaque labore libero magni minima nam natus odio, placeat saepe similique,
                                voluptates? Aperiam at,
                                commodi dicta doloribus incidunt laudantium, molestiae, placeat quia repellat sapiente
                                sequi sunt velit
                                veritatis. Ab assumenda atque dolorum eaque eligendi et laboriosam nesciunt quae
                                quisquam repudiandae.
                                Aperiam dolorem doloribus eos facilis illum maxime quaerat repellat. Aliquid asperiores
                                doloremque
                                incidunt laudantium quaerat quis repellendus tempore temporibus vitae? Adipisci autem
                                corporis cum
                                delectus deleniti dignissimos eaque eius error fuga fugiat inventore ipsa laborum nobis
                                odit, officia,
                                pariatur porro praesentium quas ratione saepe sapiente totam velit veniam voluptates
                                voluptatum.
                            </p>
                            <p>
                                Adipisci alias amet, atque beatae dignissimos doloremque, ducimus earum et eum excepturi
                                expedita
                                facilis hic id inventore ipsum itaque laboriosam laborum minus modi molestias natus
                                necessitatibus
                                numquam odit officia placeat possimus quod reprehenderit sint, soluta tempora ut veniam
                                vitae
                                voluptatum! Accusantium adipisci aliquid atque beatae deleniti earum, eos eveniet illum
                                magnam, maxime
                                nulla quod repellendus velit. Architecto aut autem mollitia nisi nobis sunt! Corporis
                                dolorem ea ex
                                tempore voluptatum! Aliquid at ea eligendi eum incidunt iusto, maiores molestiae
                                officiis qui sint!
                                Esse, eveniet ipsa molestias quis tenetur vel voluptate. Atque harum magnam maxime odio
                                perspiciatis?
                                Atque cupiditate dicta facilis harum ipsam itaque libero, minus nihil sequi veritatis.
                            </p>
                            <p>
                                A, accusantium,
                                alias at blanditiis consectetur consequuntur doloremque dolores eaque eos harum in ipsam
                                iusto labore
                                magnam nesciunt nulla numquam officiis perferendis qui quisquam quod ratione sed tempora
                                velit veniam
                                voluptas voluptatem? A accusantium, ad corporis eligendi eveniet excepturi maxime minima
                                omnis
                                praesentium recusandae? Accusantium alias amet earum ex fuga, ipsam maiores minima
                                mollitia natus
                                nesciunt officiis praesentium quia sapiente sunt suscipit veniam veritatis voluptatem,
                                voluptatum? A,
                                dignissimos fugiat molestias placeat temporibus vero!
                            </p>
                        </div>
                        <Button onClick={() => navigate('/articles')}>
                            <img src={arrow} alt='arrow' style={{marginRight: '7px'}}/>
                            <span style={{fontFamily: 'Montserrat'}}>Back to homepage</span>
                        </Button>
                    </div>
                </>
            }
        </div>
    );
};

export default ArticleItemPage;