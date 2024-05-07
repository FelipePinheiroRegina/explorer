import { FiClock } from "react-icons/fi"

import { Container, Content } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Stars } from "../../components/Stars"
import { Tags } from "../../components/Tags"

import { Link } from "react-router-dom"

export function MoviePreview() {
    return (
        <Container>
            <Header/>

            <main>
                <Content>
                    <Link to="/">
                        <ButtonText title="Go back"/>
                    </Link>

                    <div className="details">
                        <div className="title">
                            <h1>Interstellar</h1>
                            <Stars size={20}/>
                        </div>

                        <div className="nameAndDate">       
                            <div className="name">
                                <img src="https://www.github.com/FelipePinheiroRegina.png" alt="Photo User"/>
                                <p>Por Felipe Pinheiro</p>
                            </div>
                            
                            <div className="date">
                                <FiClock/>
                                <p>23/05/22 at 08:00</p>
                            </div>
                        </div>
                    </div>

                    <span className="tags">
                            <Tags title="React"/>
                            <Tags title="React"/>
                            <Tags title="React"/>
                    </span>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum nesciunt id pariatur ipsam impedit, exercitationem iure molestias hic harum laudantium eligendi quae unde veritatis neque? Voluptas nobis officiis asperiores?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur numquam repellat quo nam ea alias ratione dolores a, porro voluptas illum obcaecati, placeat similique temporibus cupiditate nostrum, laudantium repudiandae consequuntur.lore
                    </p>
                </Content>
            </main>
        </Container>
    )
}