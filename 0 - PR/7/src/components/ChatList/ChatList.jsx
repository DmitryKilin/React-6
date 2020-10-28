
        import './style.css';

        import React, { Component, Fragment } from 'react';
        import ChatDialog from '../ChatDialog/ChatDialog.jsx';

        import { Link } from 'react-router-dom';

        import { connect } from 'react-redux';
        import { bindActionCreators } from 'redux';

        import { loadChats } from '../../store/actions/chats.actions.js'
        
        class ChatList extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    
                }
            }
            
            componentDidMount() {
                let userId = 'u-1';
                this.props.loadChats('/api/chats/' + userId);
            }
            
            componentDidUpdate() {
                
            }
        
            render() {
                let { chatsFromRedux } = this.props;
                let chatsArr = chatsFromRedux.map(ch => <li key = { ch.id }>
                                                    <Link to = { `/chat/${ch.id}` }>{ch.title}</Link>
                                                </li>)

                return (
                    <Fragment>
                        <div className="ChatList d-flex flex-column">
                            {/* <Link to = "/test/">
                                <a href="#">Test</a>
                            </Link> */}
                            <ul>
                                { chatsArr }
                            </ul>
                            <div>
                                <ChatDialog contacts = { this.props.contacts }/>
                            </div>
                        </div>
                    </Fragment>
                )
            }
        }
        
        const mapStateToProps = ({ chatsReducer }) => ({
            chatsFromRedux: chatsReducer.chats
        });
        const mapDispatchToProps = dispatch => bindActionCreators({ loadChats }, dispatch);


        export default connect(mapStateToProps, mapDispatchToProps)(ChatList);