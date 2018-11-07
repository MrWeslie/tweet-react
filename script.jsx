class ListTweet extends React.Component {

    render() {
        return (
          <div>
          <p>{"Name: " + this.props.name}</p>
          <p>{"Text: " + this.props.text}</p>
          <p>{"Screen Name: " + this.props.screen_name}</p>
          <p>{"Statuses Count: " + this.props.statuses_count}</p>
          <p>{"Favourite Count: " + this.props.fav_count}</p>
          <p>{"Retweet Count: " + this.props.retweet_count}</p>
          </div>
        );
    }
}

class List extends React.Component {

    render() {
        let tweetsElements = this.props.tweets.map((tweet, index) => {
                              return <ListTweet name={tweet.user.name} screen_name={tweet.user.screen_name} text={tweet.text} statuses_count={tweet.user.statuses_count} fav_count={tweet.user.favourite_count} retweet_count={tweet.user.retweet_count}></ListTweet>;                
                            });
        return (
          <ul>
            {tweetsElements}
          </ul>
        );
    }
}

ReactDOM.render(
    <List tweets={tweets}/>,
    document.getElementById('root')
);
