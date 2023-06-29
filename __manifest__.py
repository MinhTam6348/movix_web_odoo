# -*- coding: utf-8 -*-
{
    "name": "movie",
    "summary": """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",
    "description": """
        Long description of module's purpose
    """,
    "author": "My Company",
    "website": "https://www.yourcompany.com",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "Services/Movie",
    "version": "16.0.0.1",
    # any module necessary for this one to work correctly
    "depends": ["base", "website"],
    # always loaded
    "data": [
        "security/movie_security.xml",
        "security/ir.model.access.csv",
        "views/views.xml",
        "views/movie_view.xml",
        "views/layout/about.xml",
        "views/layout/category.xml",
        "views/layout/contact_us.xml",
        "views/layout/home.xml",
        "views/layout/movie_detail.xml",
        "views/layout/movie.xml",
        "views/layout/search.xml",
        "views/snippets/about_snippet.xml",
        "views/snippets/category_snippet.xml",
        "views/snippets/contact_us_snippet.xml",
        "views/snippets/home_snippet.xml",
        "views/snippets/movie_detail_snippet.xml",
        "views/snippets/movie_snippet.xml",
        "views/snippets/search_snippet.xml",
    ],
    # only loaded in demonstration mode
    "assets": {
        "web.assets_backend": [
            "movie/static/src/css/backend/kanban.css",
        ],
        "web.assets_frontend": [
            "movie/static/src/css/frontend/home.css",
            "movie/static/src/css/frontend/list_movie.css",
            "movie/static/src/css/frontend/movie_detail.css",
            "movie/static/src/css/frontend/contact.css",
            "movie/static/src/css/frontend/pagination.css",
            "movie/static/src/js/custom.js",
        ],
    },
}
