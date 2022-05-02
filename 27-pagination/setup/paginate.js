const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Mate.ceil(folowers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
