package com.codecool.hackernews;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "AnotherServlet", urlPatterns = {"/another"}, loadOnStartup = 2)
public class AnotherServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < 10; i++) {
            buffer.append("<div>");
            buffer.append("<a href=\"/another?link_id=" + i + "\">");
            buffer.append("Hello " + i + ". link:");
            buffer.append("</a>");
            buffer.append("</div>");
        }

        String linkId = request.getParameter("link_id");

        out.println(
                "<html>\n" +
                        "  <head>" +
                        "    <title>Another page</title>" +
                        "    <link rel='/static/css/site.css'>"+
                        "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\">" +
                        "    <script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n" +
                        "    <script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script>\n" +
                        "    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity=\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin=\"anonymous\"></script>" +
                        "    <script src='/static/js/main.js'></script>" +
                        "  </head>\n" +
                        "<body>\n" +
                        "  <h1>Hello CodeCooler!</h1>" +
                        (linkId == null ?
                                "<h3>No link was pressed</h3>" :
                                "<h3>Link " + linkId + " was pressed!</h3>") +
                        "  <br/>" +
                        "  <div>" + buffer.toString() + "</div>" +
                        "</body>" +
                        "</html>"
        );
    }
}

