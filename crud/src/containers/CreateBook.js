import React, {Component} from 'react';
import { createBook } from "../actions/book.action";
import { connect } from 'react-redux';
import './CreateBook.css';

class CreateBook extends Component{
constructor (props){
    super (props);
    this.state = {
      id:0,
      title:'',
      author:'',
      year:'',
    };

}
handleSubmit(e){
  e.preventDefault();
  this.props.onAdd(this.state);
}

handleOnValueChange(e){
  this.setState({
    [e.target.name]:e.target.value,
  })
}
handleReset(e){
 e.preventDefault();
 this.setState({
   title: "",
   author: "",
   year: "",
 });
}

render(){
    return (
      <div className="create-book">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={this.handleOnValueChange.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Enter Author"
              value={this.state.author}
              onChange={this.handleOnValueChange.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              name="year"
              placeholder="Enter Year Published"
              value={this.state.year}
              onChange={this.handleOnValueChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.handleReset.bind(this)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
}

}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch)=>{
  return{
    onAdd:(book)=>{
      dispatch(createBook(book));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateBook);