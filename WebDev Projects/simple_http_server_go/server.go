package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(rw, "<a href='/about'>about</a>")
	})

	http.HandleFunc("/about", func(rw http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(rw, "<h1>About page</h1>")
	})

	fmt.Println("Listening on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
