import { FiArrowLeft } from "react-icons/fi"

import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Marker } from "../../components/Marker"

import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"

export function CreateMovie() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ rating, setRating ] = useState(0)
    const [ tags, setTags ] = useState([])
    const [ newTag, setNewTag ] = useState('')

    const navigate = useNavigate()

    async function handleCreate() {
        event.preventDefault()

        if(tags.length === 0) {
            return alert('Markers is required')
        }

        try {
            await api.post('/movieNotes', {title, description, rating, tags})

            alert('Movie note created successfully')
            navigate(-1)

        } catch (error) {
            if(error.response) {
                return alert(error.response.data.message)
            } else {
                return alert('Unable to crate')
            }
        }       
        
    }

    function handleAddTag() {
        if(!newTag) {
            return alert('Fill the field before')
        }

        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleClearFields() {
        event.preventDefault()
        
        setTitle('')
        setDescription('')
        setRating(0)
        setTags([])
    }

    function goBack() {
        navigate(-1)
    }

    return (
        <Container>
            <Header></Header>

            <main>
                <Content>
                    
                    <ButtonText 
                        title="Go back" 
                        icon={FiArrowLeft}
                        onClick={goBack}
                    />
                   
                    <h1>New Movie</h1>
                    <Form>
                        <div className="two-inputs">
                            <Input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                
                            <Input
                                type="number"
                                placeholder="Your note (0 - 5)"
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            />
                        </div>

                        <TextArea 
                            placeholder="Observations"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                
                        <section>
                            <h2>Markers</h2>
                            <div className="markers">
                                {   tags.map((tag, index) => (
                                        <Marker
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />   
                                    ))    
                                }
                        
                                <Marker
                                    placeholder="New Marker"
                                    isNew
                                    value={newTag}
                                    onChange={e => setNewTag(e.target.value)}
                                    onClick={handleAddTag}
                                />
                            </div>
                        </section>
                
                        <div className="two-buttons">
                            <button
                                onClick={handleClearFields}
                            >
                                Clear Fields
                            </button>
                            <Button 
                                title="Save alterations"
                                onClick={handleCreate}
                            />
                        </div>
                
                    </Form>
                </Content>
            </main>
            
        </Container>
    )
}