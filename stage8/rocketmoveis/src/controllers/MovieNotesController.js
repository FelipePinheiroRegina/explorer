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

        const movieNotes = await knex('movie_notes').where({user_id: id}).first()
        const tags = await knex('tags').where({user_id: id}).orderBy('name')

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
        const { title, user_id, tags } = req.query

       let movieNotes

        if(tags){
            const filterTags = tags.split(',').map(tag => tag.trim())

            movieNotes = await knex('tags')
            .select([
                "movie_notes.user_id",
                "movie_notes.id",
                "movie_notes.title",
                "movie_notes.description",
                "movie_notes.rating",
                "tags.name"
            ])
            .where("movie_notes.user_id", user_id)
            .whereLike("movie_notes.title", `%${title}%`)
            .whereIn('name', filterTags)
            .innerJoin("movie_notes", "movie_notes.id", "tags.movieNotes_id")
            .orderBy('title')
        
        } else {
            movieNotes = await knex('movie_notes').where({user_id}).whereLike('title', `%${title}%`).orderBy('title')
        }
        
        const userTags = await knex('tags').where({ user_id})
        const MovieNotesWithTags = movieNotes.map(movieNote => {
            const movieNotesTags = userTags.filter(tag => tag.movieNotes_id === movieNote.id)

            return {
                ...movieNote,
                tags: movieNotesTags
            }
        })


        return res.json({MovieNotesWithTags})
    }
}

module.exports = MovieNotesController