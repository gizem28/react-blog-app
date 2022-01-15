
 {currentBlogs
    ?.filter((item) => item.id === id)
    .map((item, index) => (
<form key={index}>
<h1 className="pt-3">Update Blog</h1>
<div className="mt-4">
  <input
    type="text"
    placeholder={item.title}
    name="title"
    className="px-4 py-3 relative bg-white border-0 shadow"
    required
    style={{ height: 50, width: 500 }}
    onChange=
    {handleInputChange}
    // {(e) =>
    //   setUpdatedBlog({ ...updatedBlog, title: e.target.value })}
  />
</div>
<div className="mt-4">
  <input
    type="alt"
    placeholder={item.imageUrl}
    name="imageUrl"
    className="px-4 py-3 relative border-0 shadow"
    required
    style={{ height: 50, width: 500 }}
    onChange=
    {handleInputChange}
    // {(e) =>
    //   setUpdatedBlog({ ...updatedBlog, imageUrl: e.target.value })
    // }
  />
</div>
<div className="mt-4">
  <textarea
    placeholder={item.content}
    name="content"
    className="px-4 py-3 relative border-0 shadow "
    required
    style={{ height: 150, width: 500 }}
    onChange=   {handleInputChange}
    // {(e) =>
    //   setUpdatedBlog({ ...updatedBlog, content: e.target.value })
    // }
  />
</div>
<div>
  <Button
    type="button"
    variant="contained"
    sx={{ mt: 3, mb: 2, px: 5, bgcolor: "secondary.main" }}
    style={{ height: 50, width: 300 }}
     onClick={() => handler(updatedBlog)}
  >
    Submit
  </Button>
</div>
</form>
  ))}