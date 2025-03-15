import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://eauyinglebjntykpjclz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhdXlpbmdsZWJqbnR5a3BqY2x6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE5ODk5MTEsImV4cCI6MjA1NzU2NTkxMX0.NgBd1Ju67mOqKfiViyCbdrk7whjTMwbOdJsHJhB1HsQ";
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchBooks() {
    // Fetch books from Supabase
    let { data: books, error } = await supabase.from("books").select("*");

    if (error) {
        console.error("Error fetching books:", error);
        return;
    }

    // Get reference to table body
    let bookTable = document.getElementById("books");

    // Populate table with book data
    books.forEach(book => {
        let row = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.ISBN}</td>
            </tr>
        `;
        bookTable.innerHTML += row;
    });
}

// Call function to fetch books
fetchBooks();
