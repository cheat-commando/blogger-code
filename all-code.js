function sort_in_order() {
  var post_list = document.querySelector(".blog-posts.hfeed.container");
  var these_children = postlist.children;
  var resort_list = [];
  for (let i = these_children.length; i > 0; i--) {
      resort_list.push(post_list[i]);
    }
  post_list.innerHTML = "";
  for (let i = 0; i < resort_list.length; i++) {
      post_list.appendChild(resort_list[i]);
    }
}
