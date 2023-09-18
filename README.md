# SI Challenge

With this I have made a few caveats, I opted (likely to my own demise) to not use a database in favor of keeping it hardcoded, when it comes to mapping values, there would likely be a database involved where these figures could be stored dynamically and updated at a moments notice, most of the logic would remain the same regardless and adding in a db server, creating the tables, etc would have taken up valuable time

This also half locks us in to this design which, may not be the best, but given the scope of this challenge (and that after this, its not being touched again, where as normal workday would be back and forth through the code making changes)

For things like `LINE_PROFILE` there is relative ease migrating from 1 value to 2 values (ie. change to `UPSTREAM` and `DOWNSTREAM`) as individual characteristics, however it's another difficulty going from 2 characteristics to 1, and preventing that characteristic in the output proved to be too much of a challenge for the timeframe given.

Tests were defined as basic as humanly possible, validating the output is exactly as wanted (manually typed), it only tests the single expectation of how it runs

To do gateway mapping, you will see I opted for sometimes the underlying functions can take an array of characteristics, where as most only take a single characteristic. I opted for this due to time constraints

I also opted to not run any express server, api endpoints, attempt to make it a lambda, instead opting for just my unit tests, this was so I could spend time on the problem rather then the things around the problem

## Running the code

```
npm i
npm test
```
