function MyList() {
  return (
    <div className="page">

      <div className="page-header">
        <h1>My List</h1>

        <p>
          Movies and shows you've saved.
        </p>
      </div>

      <div className="empty-page">

        ❤️

        <h2>Your list is empty</h2>

        <p>
          Add movies and shows to watch them later.
        </p>

      </div>

    </div>
  );
}

export default MyList;