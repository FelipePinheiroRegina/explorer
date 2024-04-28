import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <Link to='/'> Go back </Link>
                    </header>

                    <Input placeholder='Title'/>
                    <TextArea placeholder='Description'/>

                    <Section title='Utils links'>
                        <NoteItem value="https://www.rocketseat.com.br"/>
                        <NoteItem isNew />
                    </Section>

                    <Section title='Markers'>
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew />
                        </div>
                    </Section>

                    <Button title='Save'/>
                </Form>
            </main>
        </Container>
    )
}