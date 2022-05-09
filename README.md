# Cloud_lab3
Lab 3 in Software development for the Cloud

Deployed app: https://desolate-citadel-17814.herokuapp.com/

In this lab I deployed a server application to Heroku, which
calculates how many words that has 1 letter, 2 letters, and so on, 
in a sentence (string).

So, the server splits down each word of a sentence sent by the client with
the string method: split(), and puts each word into an array.
The server then sorts the array alphabetically with the sort()-method.
Then, a couple of if and for-loops is executed that calculates the words
and then the result is sent back to the client.

A client was also created that sends the string sentence, and then
recieves the result from the server and outputs the result in a table.

It took a while to figure out how to implement the count-part, but eventually
I figured it out by testing a bunch of stuff. 

