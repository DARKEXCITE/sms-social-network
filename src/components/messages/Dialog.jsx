import React from "react";
import classes from './Dialog.module.css'

const Dialog = () => {
    return (
        <div className={ classes.dialog }>
            <div className={ classes.header }>
                <div className={ classes.info }>
                    <h5 className={ classes.name }>Ольга Тиханова</h5>
                    <span className={ classes.status }>была в сети 10 минут назад</span>
                </div>

                <div className={ classes.settings }>
                    <div>
                        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4528 0C5.12791 0 0 5.12698 0 11.4528C0 17.7777 5.12791 22.9056 11.4528 22.9056C17.7777 22.9056 22.9056 17.7777 22.9056 11.4528C22.9056 5.12698 17.7777 0 11.4528 0ZM11.4528 19.8208C6.83105 19.8208 3.08487 16.0738 3.08487 11.4528C3.08487 6.83105 6.83105 3.08487 11.4528 3.08487C16.0746 3.08487 19.8208 6.83105 19.8208 11.4528C19.8208 16.0737 16.0746 19.8208 11.4528 19.8208Z" fill="#CACAEF"/>
                            <path d="M26.673 31.9236C27.2358 32.7694 27.0533 33.8894 26.2674 34.4122C25.4815 34.9352 24.378 34.6711 23.8151 33.8253L15.6281 21.5223C15.0653 20.6765 15.2478 19.5566 16.0337 19.0338C16.8197 18.5108 17.9232 18.7749 18.4861 19.6207L26.673 31.9236Z" fill="#CACAEF"/>
                        </svg>
                    </div>

                    <div>
                        <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#C4C4C4"/>
                            <circle cx="11" cy="2" r="2" fill="#C4C4C4"/>
                            <circle cx="20" cy="2" r="2" fill="#C4C4C4"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className={ classes.messages }>
                <div className={ `${classes.senderMessage} ${classes.message}` }>
                    <p className={ classes.senderText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.recipientMessage} ${classes.message}` }>
                    <div className={ classes.recipientAvatar }>
                    </div>
                    <p className={ classes.recipientText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.recipientMessage} ${classes.message}` }>
                    <div className={ classes.recipientAvatar }>
                    </div>
                    <p className={ classes.recipientText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.recipientMessage} ${classes.message}` }>
                    <div className={ classes.recipientAvatar }>
                    </div>
                    <p className={ classes.recipientText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.senderMessage} ${classes.message}` }>
                    <p className={ classes.senderText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.senderMessage} ${classes.message}` }>
                    <p className={ classes.senderText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.senderMessage} ${classes.message}` }>
                    <p className={ classes.senderText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>

                <div className={ `${classes.recipientMessage} ${classes.message}` }>
                    <div className={ classes.recipientAvatar }>
                    </div>
                    <p className={ classes.recipientText }>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, deserunt.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dialog