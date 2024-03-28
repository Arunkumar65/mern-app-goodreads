
export const InfiniteScroll = (req, res) => {
    console.log(req, req);
    // return;
    const { page, limit } = req.query;
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);
    const startIndex = (pageNumber - 1) * limitNumber;
    const endIndex = pageNumber * limitNumber;
    const paginatedData = data.slice(startIndex, endIndex);
    res.json({ data: paginatedData, hasNextPage: endIndex < data.length });
}