```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([
  {
    $match: { "field": "value" }
  },
  {
    $group: { _id: "$field", count: { $sum: 1 } }
  },
  {
    $sort: { count: -1 }
  }
])
```