import React from "react";
import './post.css';
import profile from "./profile.jpg";

const Post = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                         <div className="col-md-2">

                        </div>
                        <div className="col-md-8">
                            <div className="card ">
                                <div className="card-header">
                                    <h3 className="card-title">My Posts</h3>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <div className="mb-3">
                                            <textarea style={{ height: "" }} className="form-control" id="" placeholder="Write a Mint" aria-describedby=""></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div className="card card-default post" >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <a className="post-avatar thumbnail" href="/profile"><img src={profile}></img><div className="text-center">Luc U</div></a>
                                            <div className="likes text-center">7 Mints</div>
                                        </div>
                                        {/* <!--col-sm-2 ends --> */}
                                        <div className="col-sm-10">
                                            <div className="bubble">
                                                <div className="pointer">
                                                    <p>
                                                        Spring MVC is a java framework that is used to build web application.
                                                        It follows the Model-View-Controller design pattern
                                                        It implements all the basic feature of the core spring framework like IOC, DI etc
                                                    </p>
                                                </div>
                                                <div className="pointer-border"></div>
                                            </div>
                                            {/* <!--bubble className ends --> */}
                                            <p className="post-actions"><a href="#">Comment</a> - <a href="#">Like/Mint</a> - <a href="#">Follow</a></p>
                                            <div className="comment-form ">
                                                <div className="row g-3 align-items-center">
                                                    {/* <div className="col-auto">
                                                        <label for="inputPassword6" className="col-form-label"></label>
                                                    </div> */}
                                                    <div className="col-md">
                                                        <input  type="textarea" id="" className="form-control" placeholder="Enter Com-Mint" aria-describedby="passwordHelpInline" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <span id="passwordHelpInline" className="form-text">
                                                            <button type="submit" className="btn btn-danger btn-sm btn-add-mint "> Add Mint </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--comment form ends --> */}
                                            <div className="clearfix"></div>
                                            {/* <div className="clearfix"></div> */}

                                            <div className="comments">
                                                <div className="comment">
                                                    <a className="comment-avatar" href="#"> <img src={profile}></img></a>
                                                    <div className="comment-text">
                                                        <p>My first ever com-mint. It follows the Model-View-Controller design pattern
                                                        It implements all the basic feature of the core spring framework like IOC, DI etc</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div className="card card-default post" >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <a className="post-avatar thumbnail" href="#"><img src={profile}></img><div className="text-center">Luc U</div></a>
                                            <div className="likes text-center">5 Mints</div>
                                        </div>
                                        {/* <!--col-sm-2 ends --> */}
                                        <div className="col-sm-10">
                                            <div className="bubble">
                                                <div className="pointer">
                                                    <p>
                                                        Spring MVC is a java framework that is used to build web application.
                                                        It follows the Model-View-Controller design pattern.
                                                    </p>
                                                </div>
                                                <div className="pointer-border"></div>
                                            </div>
                                            {/* <!--bubble className ends --> */}
                                            <p className="post-actions"><a href="#">Comment</a> - <a href="#">Like/Mint</a> - <a href="#">Follow</a></p>
                                            <div className="comment-form">
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-auto">
                                                        <label for="inputPassword6" className="col-form-label"></label>
                                                    </div>
                                                    <div className="col-auto">
                                                        <input style={{ height: "70px", width: "300px" }} type="text" id="" className="form-control" placeholder="Enter Com-Mint" aria-describedby="passwordHelpInline" />
                                                    </div>
                                                    <div className="col-auto">
                                                        <span id="passwordHelpInline" className="form-text">
                                                            <button type="submit" className="btn btn-danger btn-sm btn-add-mint "> Add Mint </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--comment form ends --> */}
                                            <div className="clearfix"></div>

                                            <div className="comments">
                                                <div className="comment">
                                                    <a className="comment-avatar pull-left" href="#"> <img src={profile}></img></a>
                                                    <div className="comment-text">
                                                        <p>Spring MVC is a java framework that is used to build web application.</p>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--col-md-8 ends --> */}
                        {/* <div className="col-md-4">

                        </div> */}

                    </div>
                </div>
            </section>


        </div>

    )
}
export default Post;