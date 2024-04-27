import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <a href="/">Go back</a>
                    </header>

                    <Input placeholder='Title'/>
                    <TextArea placeholder='Description'/>

                    <Section title='Utils links'>
                        <NoteItem value="https://www.rocketseat.com.br"/>
                        <NoteItem isNew />
                    </Section>
                </Form>
            </main>
        </Container>
    )
}