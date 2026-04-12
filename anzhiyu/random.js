var posts=["2026/04/12/c++笔记/","2026/02/26/hello world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };