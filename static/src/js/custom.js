const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDkyZTQzODlmZTE1MzRiYWVkZmUzMjZiOWMzZWUzYiIsInN1YiI6IjY0M2QyZDRkNGQ2NzkxMDRmM2Q4NGNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ZkyJ5KfiHjyDTPk-V4yDccjMxBgOskVHaf1kqQYLN8",
    },
};

var main_font = document.querySelector(".main.font");
var main_back = document.querySelector(".main.back");
var img_sumary = document.querySelector(".img-sumary");
var tit_sumary = document.querySelector("#tit-sumary");
var des_sumary = document.querySelector("#des-sumary");

var top_list_movie = document.querySelectorAll(".top-list-movie");

var row = document.querySelector(".container .movies");
var background = document.querySelector(".d-background");
var img_movie = document.querySelector(".img-movie");
var title = document.querySelector(".d-title");
var description = document.querySelector(".d-des");
var statuss = document.querySelector(".d-status");
var release_date = document.querySelector(".d-rel-date");
var runtime = document.querySelector(".d-run-time");
var director = document.querySelector(".d-director");
var category_detail = document.querySelector(".d-category");
var playbtn = document.querySelector(".playbtn");
var trailer = document.querySelector(".trailer");
var closeBtn = document.querySelector(".closeBtn");
var topCast = document.querySelector(".top-cast");

var star_1 = document.querySelector(".star-1");
var star_2 = document.querySelector(".star-2");
var star_3 = document.querySelector(".star-3");
var star_4 = document.querySelector(".star-4");
var star_5 = document.querySelector(".star-5");

var paginate = document.querySelectorAll(".pagination a");

var moved_1 = document.querySelector(".moved-1");
var moved_2 = document.querySelector(".moved-2");
var moved_3 = document.querySelector(".moved-3");
var moved_4 = document.querySelector(".moved-4");
var moved_5 = document.querySelector(".moved-5");

var url_web = window.location.href;
var url = window.location.search;
var url_param = new URLSearchParams(url);

const genres = [
    {
        id: 28,
        name: "action",
    },
    {
        id: 12,
        name: "adventure",
    },
    {
        id: 16,
        name: "animation",
    },
    {
        id: 35,
        name: "comedy",
    },
    {
        id: 80,
        name: "crime",
    },
    {
        id: 99,
        name: "documentary",
    },
    {
        id: 18,
        name: "drama",
    },
    {
        id: 10751,
        name: "family",
    },
    {
        id: 14,
        name: "fantasy",
    },
    {
        id: 36,
        name: "history",
    },
    {
        id: 27,
        name: "horror",
    },
    {
        id: 10402,
        name: "musical",
    },
    {
        id: 9648,
        name: "mystery",
    },
    {
        id: 10749,
        name: "romance",
    },
    {
        id: 878,
        name: "science-fiction",
    },
    {
        id: 10770,
        name: "tv-movie",
    },
    {
        id: 53,
        name: "thriller",
    },
    {
        id: 10752,
        name: "war",
    },
    {
        id: 37,
        name: "western",
    },
];

const timeConvert = (n) => {
    var hours = n / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
};

const rating = (vote) => {
    if (vote >= 0 && vote <= 2) {
        if (vote == 0) {
            star_1.classList.add("fa-star-o");
        } else if (vote == 1) {
            star_1.classList.add("fa-star-half-o");
        } else {
            star_1.classList.add("fa-star");
        }
        star_2.classList.add("fa-star-o");
        star_3.classList.add("fa-star-o");
        star_4.classList.add("fa-star-o");
        star_5.classList.add("fa-star-o");
    } else if (vote > 2 && vote <= 4) {
        star_1.classList.add("fa-star");
        if (vote == 3) {
            star_2.classList.add("fa-star-half-o");
        } else {
            star_2.classList.add("fa-star");
        }
        star_3.classList.add("fa-star-o");
        star_4.classList.add("fa-star-o");
        star_5.classList.add("fa-star-o");
    } else if (vote > 4 && vote <= 6) {
        star_1.classList.add("fa-star");
        star_2.classList.add("fa-star");
        if (vote == 5) {
            star_3.classList.add("fa-star-half-o");
        } else {
            star_3.classList.add("fa-star");
        }
        star_4.classList.add("fa-star-o");
        star_5.classList.add("fa-star-o");
    } else if (vote > 6 && vote <= 8) {
        star_1.classList.add("fa-star");
        star_2.classList.add("fa-star");
        star_3.classList.add("fa-star");
        if (vote == 7) {
            star_4.classList.add("fa-star-half-o");
        } else {
            star_4.classList.add("fa-star");
        }
        star_5.classList.add("fa-star-o");
    } else if (vote > 8 && vote <= 10) {
        star_1.classList.add("fa-star");
        star_2.classList.add("fa-star");
        star_3.classList.add("fa-star");
        star_4.classList.add("fa-star");
        if (vote == 9) {
            star_5.classList.add("fa-star-half-o");
        } else {
            star_5.classList.add("fa-star");
        }
    }
};

const move = () => {
    let moved = "";

    moved = moved_1.style.gridArea;
    moved_1.style.gridArea = moved_2.style.gridArea;
    moved_2.style.gridArea = moved_3.style.gridArea;
    moved_3.style.gridArea = moved_4.style.gridArea;
    moved_4.style.gridArea = moved_5.style.gridArea;
    moved_5.style.gridArea = moved;

    if (moved_1.style.gridArea == "1 / 2 / 17 / 6") {
        let move_f = moved_1.querySelector(".font");
        let move_b = moved_1.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_1.style.zIndex = 1;

        moved_1.classList.remove(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );
        moved_1.classList.add(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );

        move_f.classList.remove("rotate-movie", "sub");
        move_b.classList.remove("rotate-movie", "sub");

        move_f.classList.add("link-top-movie-main", "main");
        move_b.classList.add("link-top-movie-main", "main");

        img_f.classList.remove("list-img-sumary");
        ul_b.classList.remove("top-movie-sumary");

        img_f.classList.add("img", "img-fluid", "mx-auto");
        ul_b.classList.add("movie-sumary");
    } else {
        let move_f = moved_1.querySelector(".font");
        let move_b = moved_1.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_1.style.zIndex = 5;

        moved_1.classList.remove(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );
        moved_1.classList.add(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );

        move_f.classList.add("rotate-movie", "sub");
        move_b.classList.add("rotate-movie", "sub");

        move_f.classList.remove("link-top-movie-main", "main");
        move_b.classList.remove("link-top-movie-main", "main");

        img_f.classList.add("list-img-sumary");
        ul_b.classList.add("top-movie-sumary");

        img_f.classList.remove("img", "img-fluid", "mx-auto");
        ul_b.classList.remove("movie-sumary");
    }

    if (moved_2.style.gridArea == "1 / 2 / 17 / 6") {
        let move_f = moved_2.querySelector(".font");
        let move_b = moved_2.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_2.style.zIndex = 1;

        moved_2.classList.remove(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );
        moved_2.classList.add(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );

        move_f.classList.remove("rotate-movie", "sub");
        move_b.classList.remove("rotate-movie", "sub");

        move_f.classList.add("link-top-movie-main", "main");
        move_b.classList.add("link-top-movie-main", "main");

        img_f.classList.remove("list-img-sumary");
        ul_b.classList.remove("top-movie-sumary");

        img_f.classList.add("img", "img-fluid", "mx-auto");
        ul_b.classList.add("movie-sumary");
    } else {
        let move_f = moved_2.querySelector(".font");
        let move_b = moved_2.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_2.style.zIndex = 5;

        moved_2.classList.remove(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );
        moved_2.classList.add(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );

        move_f.classList.add("rotate-movie", "sub");
        move_b.classList.add("rotate-movie", "sub");

        move_f.classList.remove("link-top-movie-main", "main");
        move_b.classList.remove("link-top-movie-main", "main");

        img_f.classList.add("list-img-sumary");
        ul_b.classList.add("top-movie-sumary");

        img_f.classList.remove("img", "img-fluid", "mx-auto");
        ul_b.classList.remove("movie-sumary");
    }

    if (moved_3.style.gridArea == "1 / 2 / 17 / 6") {
        let move_f = moved_3.querySelector(".font");
        let move_b = moved_3.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_3.style.zIndex = 1;

        moved_3.classList.remove(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );
        moved_3.classList.add(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );

        move_f.classList.remove("rotate-movie", "sub");
        move_b.classList.remove("rotate-movie", "sub");

        move_f.classList.add("link-top-movie-main", "main");
        move_b.classList.add("link-top-movie-main", "main");

        img_f.classList.remove("list-img-sumary");
        ul_b.classList.remove("top-movie-sumary");

        img_f.classList.add("img", "img-fluid", "mx-auto");
        ul_b.classList.add("movie-sumary");
    } else {
        let move_f = moved_3.querySelector(".font");
        let move_b = moved_3.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_3.style.zIndex = 5;

        moved_3.classList.remove(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );
        moved_3.classList.add(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );

        move_f.classList.add("rotate-movie", "sub");
        move_b.classList.add("rotate-movie", "sub");

        move_f.classList.remove("link-top-movie-main", "main");
        move_b.classList.remove("link-top-movie-main", "main");

        img_f.classList.add("list-img-sumary");
        ul_b.classList.add("top-movie-sumary");

        img_f.classList.remove("img", "img-fluid", "mx-auto");
        ul_b.classList.remove("movie-sumary");
    }

    if (moved_4.style.gridArea == "1 / 2 / 17 / 6") {
        let move_f = moved_4.querySelector(".font");
        let move_b = moved_4.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_4.style.zIndex = 1;

        moved_4.classList.remove(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );
        moved_4.classList.add(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );

        move_f.classList.remove("rotate-movie", "sub");
        move_b.classList.remove("rotate-movie", "sub");

        move_f.classList.add("link-top-movie-main", "main");
        move_b.classList.add("link-top-movie-main", "main");

        img_f.classList.remove("list-img-sumary");
        ul_b.classList.remove("top-movie-sumary");

        img_f.classList.add("img", "img-fluid", "mx-auto");
        ul_b.classList.add("movie-sumary");
    } else {
        let move_f = moved_4.querySelector(".font");
        let move_b = moved_4.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_4.style.zIndex = 5;

        moved_4.classList.remove(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );
        moved_4.classList.add(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );

        move_f.classList.add("rotate-movie", "sub");
        move_b.classList.add("rotate-movie", "sub");

        move_f.classList.remove("link-top-movie-main", "main");
        move_b.classList.remove("link-top-movie-main", "main");

        img_f.classList.add("list-img-sumary");
        ul_b.classList.add("top-movie-sumary");

        img_f.classList.remove("img", "img-fluid", "mx-auto");
        ul_b.classList.remove("movie-sumary");
    }

    if (moved_5.style.gridArea == "1 / 2 / 17 / 6") {
        let move_f = moved_5.querySelector(".font");
        let move_b = moved_5.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_5.style.zIndex = 1;

        moved_5.classList.remove(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );
        moved_5.classList.add(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );

        move_f.classList.remove("rotate-movie", "sub");
        move_b.classList.remove("rotate-movie", "sub");

        move_f.classList.add("link-top-movie-main", "main");
        move_b.classList.add("link-top-movie-main", "main");

        img_f.classList.remove("list-img-sumary");
        ul_b.classList.remove("top-movie-sumary");

        img_f.classList.add("img", "img-fluid", "mx-auto");
        ul_b.classList.add("movie-sumary");
    } else {
        let move_f = moved_5.querySelector(".font");
        let move_b = moved_5.querySelector(".back");
        let img_f = move_f.querySelector("img");
        let ul_b = move_b.querySelector("ul");

        moved_5.style.zIndex = 5;

        moved_5.classList.remove(
            "main-list-movie",
            "o_grid_item",
            "o_grid_item_image",
            "text-center",
            "o_colored_level",
            "g-col-lg-4",
            "g-height-16",
            "col-lg-4"
        );
        moved_5.classList.add(
            "rotate-movies",
            "top-list-movie",
            "o_grid_item",
            "o_colored_level",
            "text-center",
            "g-height-6",
            "g-col-lg-2",
            "col-lg-2",
            "o_cc",
            "o_cc2"
        );

        move_f.classList.add("rotate-movie", "sub");
        move_b.classList.add("rotate-movie", "sub");

        move_f.classList.remove("link-top-movie-main", "main");
        move_b.classList.remove("link-top-movie-main", "main");

        img_f.classList.add("list-img-sumary");
        ul_b.classList.add("top-movie-sumary");

        img_f.classList.remove("img", "img-fluid", "mx-auto");
        ul_b.classList.remove("movie-sumary");
    }
};

const fetchDataFromApi = async (page) => {
    try {
        if (page == null) page = 1;
        paginate.forEach((item, index) => {
            if (index == page - 1) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                var data = res.results;

                main_font.href = `/movie-detail?id=${data[0].id}`;
                main_back.href = `/movie-detail?id=${data[0].id}`;
                img_sumary.src =
                    data[0].backdrop_path != null
                        ? `https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`
                        : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                tit_sumary.innerText = data[0].title;
                des_sumary.innerText = data[0].overview;

                top_list_movie.forEach((item, index) => {
                    var list_img_sumary =
                        item.querySelector(".list-img-sumary");
                    var top_tit_sumary = item.querySelector("#top-tit-sumary");
                    var top_des_sumary = item.querySelector("#top-des-sumary");
                    var link_movie_font = item.querySelector(".font");
                    var link_movie_back = item.querySelector(".back");

                    list_img_sumary.src =
                        data[index + 1].backdrop_path != null
                            ? `https://image.tmdb.org/t/p/original/${
                                  data[index + 1].backdrop_path
                              }`
                            : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                    top_tit_sumary.innerText = data[index + 1].title;
                    top_des_sumary.innerText = data[index + 1].overview;
                    link_movie_font.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                    link_movie_back.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                });

                const html = data.map((movie, index) => {
                    if (index >= 5) {
                        return `
                          <div class="card-item s_col_no_bgcolor pt16 pb16 col-lg-3 " style="">
                              <div class="rotate-movies card-custom text-bg-white h-100" style="">
                                  <a class="rotate-movie" href="/movie-detail?id=${movie.id}">
                                      <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" 
                                      onerror='this.onerror = null; this.src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="'
                                      alt="" class="card-img-top img img-fluid o_we_custom_image" data-resize-width="undefined" data-bs-original-title="" title="" aria-describedby="tooltip303140" loading="lazy" />
                                  </a>
                                  <a class="rotate-movie back" href="/movie-detail?id=${movie.id}">
                                        <ul class="movie-list-sumary">
                                            <li>Name</li>
                                            <li>${movie.title}</li>
                                            <li>Description</li>
                                            <li>${movie.overview}</li>
                                        </ul>
                                    </a>
                              </div>
                          </div>
                      `;
                    }
                });
                row.innerHTML = html.join("");
            })
            .catch((err) => console.error(err));
    } catch (err) {
        console.log(err);
        return err;
    }
};

const movieDetail = async (id) => {
    try {
        await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                background.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${res.backdrop_path}')`;
                img_movie.src =
                    res.poster_path != null
                        ? `https://image.tmdb.org/t/p/original/${res.poster_path}`
                        : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                title.innerText = res.title;
                description.innerText = res.overview;
                rating(Math.floor(res.vote_average));
                statuss.innerText = res.status;
                const date = new Date(res.release_date);
                let options = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                };
                release_date.innerText = Intl.DateTimeFormat(
                    "en-US",
                    options
                ).format(date);
                runtime.innerText = timeConvert(res.runtime);
                let datas = res.genres.map((data) => data.name);
                category_detail.innerText = datas.join(" , ");
            })
            .catch((err) => console.error(err));
    } catch (err) {
        console.log(err);
        return err;
    }
};

const topCash = async (id) => {
    try {
        await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                var data = res.cast;
                var direc = res.crew.filter(({ job }) => job === "Director");
                director.innerText = direc[0]?.name;
                const html = data.map((cast) => {
                    if (cast.order < 6) {
                        return `
                                <div class="pt32 pb32 text-center o_colored_level col-lg-2">
                                        <img src="https://image.tmdb.org/t/p/original/${cast.profile_path}" 
                                            onerror='this.onerror = null; this.src="https://isaca-gwdc.org/wp-content/uploads/2016/12/male-profile-image-placeholder.png"' 
                                            alt="" class="top-cash_image m-3 img img-fluid o_we_custom_image rounded-circle" data-resize-width="undefined" style="object-fit: cover; object-position: center top; height: 194px; width: 174px;" data-bs-original-title="" title="" aria-describedby="tooltip161795" loading="lazy"/>
                                        <h4>
                                            <font  class="text-white">${cast.name} </font><br/>
                                        </h4>
                                        <h5>
                                            <font class="text-600">${cast.character}</font>
                                            <br/>
                                        </h5>
                                </div>
                            `;
                    }
                });
                topCast.innerHTML = html.join("");
            })
            .catch((err) => console.error(err));
    } catch (err) {
        console.log(err);
        return err;
    }
};

const search = async (name) => {
    try {
        await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                var data = res.results;

                main_font.href = `/movie-detail?id=${data[0].id}`;
                main_back.href = `/movie-detail?id=${data[0].id}`;
                img_sumary.src =
                    data[0].backdrop_path != null
                        ? `https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`
                        : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                tit_sumary.innerText = data[0].title;
                des_sumary.innerText = data[0].overview;

                top_list_movie.forEach((item, index) => {
                    var list_img_sumary =
                        item.querySelector(".list-img-sumary");
                    var top_tit_sumary = item.querySelector("#top-tit-sumary");
                    var top_des_sumary = item.querySelector("#top-des-sumary");
                    var link_movie_font = item.querySelector(".font");
                    var link_movie_back = item.querySelector(".back");

                    list_img_sumary.src =
                        data[index + 1].backdrop_path != null
                            ? `https://image.tmdb.org/t/p/original/${
                                  data[index + 1].backdrop_path
                              }`
                            : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                    top_tit_sumary.innerText = data[index + 1].title;
                    top_des_sumary.innerText = data[index + 1].overview;
                    link_movie_font.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                    link_movie_back.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                });

                const html = data.map((movie, index) => {
                    if (index >= 5) {
                        return `
                        <div class="card-item s_col_no_bgcolor pt16 pb16 col-lg-3 " style="">
                                <div class="rotate-movies card-custom text-bg-white h-100" style="">
                                      <a class="rotate-movie" href="/movie-detail?id=${movie.id}">
                                          <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" 
                                          onerror='this.onerror = null; this.src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="'
                                          alt="" class="card-img-top img img-fluid o_we_custom_image" data-resize-width="undefined" data-bs-original-title="" title="" aria-describedby="tooltip303140" loading="lazy" />
                                      </a>
                                      <a class="rotate-movie back" href="/movie-detail?id=${movie.id}">
                                            <ul class="movie-list-sumary">
                                                <li>Name</li>
                                                <li>${movie.title}</li>
                                                <li>Description</li>
                                                <li>${movie.overview}</li>
                                            </ul>
                                        </a>
                                  </div>
                              </div>
                      `;
                    }
                });
                row.innerHTML = html.join("");
            })
            .catch((err) => console.error(err));
    } catch (err) {
        console.log(err);
        return err;
    }
};

const category = async (category, page) => {
    try {
        if (page == null) page = 1;
        paginate.forEach((item, index) => {
            item.href = `/category?name=${category}&page=${index + 1}`;
            if (index == page - 1) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        const result = genres.filter((item) => item.name == category);
        await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${result[0].id}`,
            options
        )
            .then((res) => res.json())
            .then((res) => {
                var data = res.results;

                main_font.href = `/movie-detail?id=${data[0].id}`;
                main_back.href = `/movie-detail?id=${data[0].id}`;
                img_sumary.src =
                    data[0].backdrop_path != null
                        ? `https://image.tmdb.org/t/p/original/${data[0].backdrop_path}`
                        : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                tit_sumary.innerText = data[0].title;
                des_sumary.innerText = data[0].overview;

                top_list_movie.forEach((item, index) => {
                    var list_img_sumary =
                        item.querySelector(".list-img-sumary");
                    var top_tit_sumary = item.querySelector("#top-tit-sumary");
                    var top_des_sumary = item.querySelector("#top-des-sumary");
                    var link_movie_font = item.querySelector(".font");
                    var link_movie_back = item.querySelector(".back");

                    list_img_sumary.src =
                        data[index + 1].backdrop_path != null
                            ? `https://image.tmdb.org/t/p/original/${
                                  data[index + 1].backdrop_path
                              }`
                            : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                    top_tit_sumary.innerText = data[index + 1].title;
                    top_des_sumary.innerText = data[index + 1].overview;
                    link_movie_font.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                    link_movie_back.href = `/movie-detail?id=${
                        data[index + 1].id
                    }`;
                });

                const html = data.map((movie, index) => {
                    if (index >= 5) {
                        return `
                          <div class="card-item s_col_no_bgcolor pt16 pb16 col-lg-3 " style="">
                                  <div class="rotate-movies card-custom text-bg-white h-100" style="">
                                      <a class="rotate-movie" href="/movie-detail?id=${movie.id}">
                                          <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" 
                                          onerror='this.onerror = null; this.src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="'
                                          alt="" class="card-img-top img img-fluid o_we_custom_image" data-resize-width="undefined" data-bs-original-title="" title="" aria-describedby="tooltip303140" loading="lazy" />
                                      </a>
                                      <a class="rotate-movie back" href="/movie-detail?id=${movie.id}">
                                            <ul class="movie-list-sumary">
                                                <li>Name</li>
                                                <li>${movie.title}</li>
                                                <li>Description</li>
                                                <li>${movie.overview}</li>
                                            </ul>
                                        </a>
                                  </div>
                              </div>
                        `;
                    }
                });
                row.innerHTML = html.join("");
            })
            .catch((err) => console.error(err));
    } catch (err) {
        console.log(err);
        return err;
    }
};

const start = () => {
    if (url_param.get("id") != null) {
        movieDetail(url_param.get("id"));
        topCash(url_param.get("id"));

        playbtn.addEventListener("click", async () => {
            let id = url_param.get("id");
            try {
                await fetch(
                    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                    options
                )
                    .then((res) => res.json())
                    .then((res) => {
                        var key = res.results[0]?.key;
                        if (key == null) {
                            trailer.src = `https://www.youtube.com/watch?v=${key}`;
                        }
                        trailer.src = `https://www.youtube.com/embed/${key}`;
                        trailer.style.display = "flex";
                        closeBtn.style.display = "flex";
                    })
                    .catch((err) => console.error(err));
            } catch (err) {
                console.log(err);
                return err;
            }
        });

        closeBtn.addEventListener("click", () => {
            trailer.style.display = "none";
            closeBtn.style.display = "none";
        });
    } else if (
        url_param.get("search") != null &&
        url_param.get("search") != ""
    ) {
        search(url_param.get("search"));
        setInterval(() => {
            move();
        }, 30000);
    } else if (url_param.get("name") != null && url_param.get("name") != "") {
        category(url_param.get("name"), url_param.get("page"));
        setInterval(() => {
            move();
        }, 30000);
    } else if (url_web.includes("http://localhost:8069/movie")) {
        fetchDataFromApi(url_param.get("page"));
        setInterval(() => {
            move();
        }, 30000);
    }
};

start();
