# -*- coding: utf-8 -*-
# from odoo import http


# class Movie(http.Controller):
#     @http.route('/movie/movie', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/movie/movie/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('movie.listing', {
#             'root': '/movie/movie',
#             'objects': http.request.env['movie.movie'].search([]),
#         })

#     @http.route('/movie/movie/objects/<model("movie.movie"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('movie.object', {
#             'object': obj
#         })
