import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [state, setState] = useState({ selectedFile: null, loaded: 0 });

  const checkMimeType = (event) => {
    let files = event.target.files;
    let err = []; // create empty array
    const types = ["image/png", "image/jpeg", "image/gif"];
    for (var x = 0; x < files.length; x++) {
      if (types.every((type) => files[x].type !== type)) {
        err[x] = files[x].type + " is not a supported format\n";
        // assign message to array
      }
    }
    for (var z = 0; z < err.length; z++) {
      // loop create toast massage
      event.target.value = null;
      toast.error(err[z]);
    }
    return true;
  };

  const maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null; // discard selected file
      toast.warn(msg);
      return false;
    }
    return true;
  };

  const checkFileSize = (event) => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };

  const onChangeHandler = (event) => {
    var files = event.target.files;
    setState({
      selectedFile: files,
      loaded: 0,
    });
    // if (maxSelectFile(event) && checkMimeType(event) && checkMimeType(event)) {
    //   // if return true allow to setState
    //   setState({
    //     selectedFile: files,
    //     loaded: 0,
    //   });
    // }
  };

  const onClickHandler = () => {
    const data = new FormData();
    for (var x = 0; x < state.selectedFile.length; x++) {
      data.append("file", state.selectedFile[x]);
    }

    axios
      .post("http://110.225.194.10:9600/upload", data, {
        onUploadProgress: (ProgressEvent) => {
          setState({
            ...state,
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      })

      .then((res) => {
        // then print response status
        console.log(res.statusText);
        toast.success("upload success");
        setState({
          ...state,
          selectedFile: null,
        });
      })
      .catch((err) => {
        toast.error("upload fail");
      });
  };
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-md-6">
          <form method="post" action="#" id="#">
            <div className="form-group">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <Progress max="100" color="success" value={state.loaded}>
                {Math.round(state.loaded, 2)}%
              </Progress>
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={onClickHandler}
              >
                Upload
              </button>
            </div>
          </form>
        </div> */}
        <div className="col-md-6">
          <form method="post" action="#" id="#">
            <div className="form-group">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <Progress max="100" color="success" value={state.loaded}>
                {Math.round(state.loaded, 2)}%
              </Progress>
              <button
                type="button"
                className="btn btn-success btn-block mt-1"
                onClick={onClickHandler}
              >
                Upload
              </button>
            </div>
            <div className="form-group">
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
