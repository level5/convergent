#### 1

```
a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]

or

a = {"az", "toto", "picaro", "zone", "kiwi"} -->

{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}

or

a = ["az", "toto", "picaro", "zone", "kiwi"] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]

or

a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->

[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
```


solution:
```js
function partlist(arr) {
    let result = [];
    for (let i = 1; i< arr.length; i++) {
      result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
    }
    return result;
}
```



#### 2 数组中除去最大值和最小值之后的和

```
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
```
