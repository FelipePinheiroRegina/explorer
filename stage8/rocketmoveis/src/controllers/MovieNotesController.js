const knex = require('../database/knex')

class MovieNotesController {
    async create(req, res){
        const { title, description, rating, tags } = req.body

        const user_id = req.user.id

        const [ movie_notes_id ] = await knex('movie_notes').insert({title, description, rating, user_id}) 

        const tagsInsert = tags.map(name => {
            return { 
                movieNotes_id: movie_notes_id,
                name,
                user_id 
            }
        })

        await knex('tags').insert(tagsInsert)

        return res.json()
    }

    async show(req, res){
        const { id } = req.params

        const movieNotes = await knex('movie_notes').where({id}).first()
        const tags = await knex('tags').where("movieNotes_id", id).orderBy('name')
        
        return res.json({
            ...movieNotes,
            tags
        })
    }

    async delete(req, res){
        const { id } = req.params

        await knex('movie_notes').where({id}).delete()

        return res.json()
    }

    async index(req, res){
        const { title } = req.query
        const user_id = req.user.id

        let movieNotes
        
        if(title) {
                movieNotes = await knex('movie_notes').where({user_id}).whereLike('title', `%${title}%`).orderBy('title')
        } else {
            console.log('passei por aqui')
                movieNotes = await knex('movie_notes')
                .where({user_id})
        }

        const userTags = await knex('tags')
        .where({user_id})

        const movieNotesWithTags = await movieNotes.map(movieNote => {
            const movieNoteTags = userTags.filter(userTag => userTag.movieNotes_id === movieNote.id)

            return {
                ...movieNote,
                tags: movieNoteTags
            }
        })
        
        return res.json(movieNotesWithTags)
    }
}

module.exports = MovieNotesController