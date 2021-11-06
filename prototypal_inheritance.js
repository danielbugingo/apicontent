const postSection = document.querySelector("#posts");
const postTemplate = document.querySelector("#post-template");

getData();

async function getData() {
	const postStream = await fetch(
		"https://jsonplaceholder.typicode.com/posts"
	);
	const posts = await postStream.json();
	let i = 0;
	posts.forEach((post) => {
		i++;
		//console.log("posts");
		if (i < 20) {
			const title = post.title;
			const body = post.body;

			const newPost = document.importNode(postTemplate.content, true);
			const postTitle = newPost.querySelector(".post_title");
			const postBody = newPost.querySelector(".post_body");

			postTitle.innerText = title;
			postBody.innerText = body;

			postSection.appendChild(newPost);
		}
	});
}
