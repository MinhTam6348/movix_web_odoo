# -*- coding: utf-8 -*-

from odoo import models, fields


class Movie(models.Model):
    _name = 'movie.movix'
    _description = 'All info about a movie'

    title = fields.Char("Title")
    description = fields.Text("Description")
    image = fields.Binary("Image")
    rating = fields.Float("Rating")

    video = fields.Char("Video")
    status = fields.Char("Status")
    release_date = fields.Date("Release Date")
    runtime = fields.Integer("Runtime")
    director = fields.Char("Director")
    producer = fields.Char("Producer")

    


