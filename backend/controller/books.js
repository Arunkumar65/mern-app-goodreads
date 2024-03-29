import Books from "../models/books"
export const getAllBooks = async (req, res) => {
    const allBooks = await Books.find({});
    console.log(allBooks)
    res.json({
        status: true,
        data: allBooks,
        message: "Successfully fetched all books"
    })
}