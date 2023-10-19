const crypto = require('node:crypto')

const { db } = require('../../firebase')

class MovieModel {
    static async getAll ({ genre }) {
        // if (genre) filter movies
        // else : genre not defined
        const result = await db.collection('movies').get()
        const movies = result.docs.map((doc) => ({
            id: doc.id, ...doc.data()
        }))
        return movies
    }

    static async getById ({ id }) {
        const docRef = await db.collection('movies').doc(id)
        const docSnap = await docRef.get()
        return { id, ...docSnap.data() }
    }

    static async create ({ input }) {
        const id = crypto.randomUUID()
        await db.collection('movies').doc(id).set(input)
        return { id, ...input }
    }

    static async delete ({ id }) {
        try {
            await db.collection('movies').doc(id).delete()
            return true
        } catch {
            return false
        }
    }

    static async update ({ id, input }) {
        try {
            await db.collection('movies').doc(id).update(input)
            return { id, ...input }
        } catch {
            return false
        }
    }
}

module.exports = MovieModel