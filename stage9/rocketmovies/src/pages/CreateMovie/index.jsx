import { FiArrowLeft } from "react-icons/fi"

import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Marker } from "../../components/Marker"

import { Link } from "react-router-dom"

export function CreateMovie() {
    return (
        <Container>
            <Header></Header>

            <main>
                <Content>
                    <Link to="/">
                        <ButtonText title="Go back" icon={FiArrowLeft}/>
                    </Link>

                    <h1>New Movie</h1>
                    <Form>
                        <div className="two-inputs">
                            <Input
                            type="text"
                                placeholder="Title"
                            />
                
                            <Input
                                type="number"
                                placeholder="Your note (0 - 5)"/
                            >
                        </div>
                        <TextArea placeholder="Observations"/>
                
                        <section>
                            <h2>Markers</h2>
                            <div className="markers">
                                <Marker
                                    placeholder="New Marker"
                                    value="React"
                                />
                                <Marker
                                    placeholder="New Marker"
                                    isNew
                                />
                            </div>
                        </section>
                
                        <div className="two-buttons">
                            <button>Delete movie</button>
                            <Button title="Save alterations"/>
                        </div>
                
                    </Form>
                </Content>
            </main>
            
        </Container>
    )
}