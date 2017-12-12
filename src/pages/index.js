import React from "react"
import {Timeline} from 'react-twitter-widgets'

export default ({ data }) => {
    return (
        <Timeline
            dataSource={{
                sourceType: 'profile',
                screenName: 'Nick_Rance'
            }}
            options={{
                username: 'Nick_Rance',
                height: '400',
                width: '800',
            }}
            onLoad={() => console.log('Timeline is loaded!')}
        />
    )
}
