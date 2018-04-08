import React from "react"
import {Timeline} from 'react-twitter-widgets'
import YouTube from 'react-youtube-embed'

export default ({ data }) => {
    return (
      <div>
      <YouTube id='TdBSoy9F9NA' />
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'Nick_Rance'
            }}
            options={{
                username: 'Nick_Rance',
                height: '95vh',
                width: '1000',
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>

    )
}
