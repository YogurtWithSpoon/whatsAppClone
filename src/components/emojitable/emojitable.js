import React from 'react'
import './emojitable.scss'

function EmojiTable({message}) {
  const emoji = ["😀","😃","😄","😁","😆","😅","😂","🤣","☹️","🥱"]
  return (
    <div className="emojitable">
      {emoji.map(item => <p className="emojitable__item" onClick={(e) => {
        message.setMessage(message.message + e.target.textContent)
      }}>{item}</p>)}
    </div>
  )
}

export default EmojiTable
