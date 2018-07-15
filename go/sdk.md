# SDK

## JSON

```go
package main

import (
  "encoding/json"
)

type (
  gResult struct {
    GsearchResultClass string `json:"GsearchResultClass"`
    ...
  }

  gResponse struct {
    ResponseData struct {
      Results []gResult `json:"results"`
    } `json:"responseData"`
  }
)


func main() {
  var gr gResponse
  err := json.NewDecoder(resp.Body).Decode(&gr)
}

```

每个字段最后使用单引号声明了一个字符串。这些字符串被称作标签（tag）

如果不存在标签，编码和解码过程会试图以大小写无关的方式，直接使用字段的名字进行匹配。

如何处理optional的字段:
* [stackoverflow](https://stackoverflow.com/questions/24216510/empty-or-not-required-struct-fields-in-golang)
* [看上去这篇可以解决](https://willnorris.com/2014/05/go-rest-apis-and-pointers)
