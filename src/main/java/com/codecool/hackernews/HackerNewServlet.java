package com.codecool.hackernews;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "HackerNewsServlet", urlPatterns = {"/"}, loadOnStartup = 1)
public class HackerNewServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String title = "Michael Hackson news";

        out.println(
                "<html>\n" +
                        "<head>" +
                        "  <title>" + title + "</title>" +
                        "  <link rel='/static/css/site.css'>" +
                        "  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\">" +
                        "</head>\n" +
                        "<body>\n" +
//                        "<h1 align = \"center\">" + title + "</h1>\n" +
//                        "<ul>\n" +
//                        "<li><b>First Name</b>: " + request.getParameter("first_name") + "\n" +
//                        "<li><b>Last Name</b>: " + request.getParameter("last_name") + "\n" +
//                        "</ul>\n" +
                        "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
                        "  <a class=\"navbar-brand\" href=\"/\">Hackson news</a>\n" +
                        "  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
                        "    <span class=\"navbar-toggler-icon\"></span>\n" +
                        "  </button>\n" +
                        "  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n" +
                        "    <div class=\"navbar-nav\">\n" +
                        "      <a class=\"nav-link\" href=\"#\">Top news</a>\n" +
                        "      <a class=\"nav-link\" href=\"#\">Newest</a>\n" +
                        "      <a class=\"nav-link\" href=\"#\">Jobs</a>\n" +
                        "    </div>\n" +
                        "  </div>\n" +
                        "</nav>" +
                        "<div class=cards>" +
                        "</div>" +
                        "<div class='visit'>You can serve any static content from <span class='folder'>webapp/static</span> folder, like a css file.</div>" +
                        "<div>Visit another servlet: <a href=\"/another\">Visit the other servlet</a></div>" +
                        "<div>You can provide a json file as well: <a href=\"/json\">Visit Hacker News json data example</a></div>" +
                        "</body>" +
                        "    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n" +
                        "    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script>\n" +
                        "    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity=\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin=\"anonymous\"></script>" +
                        "    <script src='/static/js/main.js'></script>" +
                        "</html>"
        );
    }
}
