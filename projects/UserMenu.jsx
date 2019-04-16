import React from "react";
import styled from "styled-components";
import UserContent from "../contexts/UserContent";

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    cursor: pointer;
  }
  ul {
    font-size: 16px;
    list-style: none;
    position: absolute;
    top: 35px;
    right: 5px;
    margin: 0;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  li {
    cursor: pointer;
    display: block;
    padding: 3px 20px;

    &:hover {
      background-color: #e3eafd;
    }
  }

  .UserAvatar {
    height: 36px;
    border-radius: 50%;
  }
`;

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.MenuUlRef = React.createRef();
  }

  handleClick = e => {
    if (e.target === this.MenuUlRef.current) {
      this.setState({
        display: this.state.display?false:true
      });
    }else if(e.target !== this.MenuUlRef.current && e.target.tagName!=="LI"){
      this.setState({
        display: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    const ulDisplay = this.state.display;
    return (
      <UserContent.Consumer>
        {value => {
          const { user, onLogout } = value;
          return (
            <Menu className="UserMenu">
              <img className="UserAvatar" alt="User avatar" src={user.avatar} ref={this.MenuUlRef}/>
              
                {ulDisplay ? <ul><li onClick={onLogout}>Logout</li></ul> : null}
                {/* {ulDisplay ? <li onClick={onLogout}>Logout</li> : null} */}
              
            </Menu>
          );
        }}
      </UserContent.Consumer>
    );
  }
}

export default UserMenu;
