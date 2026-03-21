var posts=["2026/02/26/hello world/","2026/03/21/c++笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };