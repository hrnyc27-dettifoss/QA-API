-- CREATE TABLE public.questions
CREATE TABLE questions
(
    id integer NOT NULL,
    question_body character varying(1000) NOT NULL,
    question_date timestamp with time zone NOT NULL DEFAULT current_timestamp,
    asker_name character varying(60) NOT NULL,
    asker_email character varying(60) NOT NULL,
    question_helpfulness integer NOT NULL DEFAULT 0,
    reported integer NOT NULL DEFAULT 0,
    product_id integer NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (1, 'What fabric is the top made of?', '2018-01-04 00:00:00-05', 'yankeelover', 'first.last@gmail.com', 1, 0, 1);
INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (2, 'HEY THIS IS A WEIRD QUESTION!!!!?', '2019-04-28 00:00:00-04', 'jbilas', 'first.last@gmail.com', 4, 1, 1);
INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (3, 'Does this product run big or small?', '2019-01-17 00:00:00-05', 'jbilas', 'first.last@gmail.com', 8, 0, 1);
INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (4, 'How long does it last?', '2019-07-06 00:00:00-04', 'funnygirl', 'first.last@gmail.com', 6, 0, 1);
INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (5, 'Can I wash it?', '2018-02-08 00:00:00-05', 'cleopatra', 'first.last@gmail.com', 7, 0, 1);
INSERT INTO questions (id, body, question_date, asker_name, asker_email, question_helpfulness, reported, product_id) VALUES (6, 'Is it noise cancelling?', '2018-08-12 00:00:00-04', 'coolkid', 'first.last@gmail.com', 19, 1, 1);

-- TABLESPACE pg_default;

-- ALTER TABLE public.questions
--     OWNER to postgres;

-- CREATE TABLE public.answers
CREATE TABLE answers
(
    id integer NOT NULL,
    body character varying(1000) NOT NULL,
    answer_date timestamp with time zone NOT NULL DEFAULT current_timestamp,
    answerer_name character varying(60) NOT NULL,
    email character varying(60) NOT NULL,
    helpfulness integer DEFAULT 0 NOT NULL,
    reported integer DEFAULT 0 NOT NULL,
    question_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id)
        REFERENCES public.questions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        -- NOT VALID
);

INSERT INTO answers (id, body, answer_date, answerer_name, email, helpfulness, reported, question_id) VALUES (1, "Something pretty soft but I can't be sure", "2018-01-04 00:00:00-05", "metslover", "first.last@gmail.com", 5, 0, 1); --5
INSERT INTO answers (id, body, answer_date, answerer_name, email, helpfulness, reported, question_id) VALUES (2, "Its the best! Seriously magic fabric", "2018-01-04 00:00:00-05", "metslover", "first.last@gmail.com", 7, 0, 1); --7
INSERT INTO answers (id, body, answer_date, answerer_name, email, helpfulness, reported, question_id) VALUES (3, "DONT BUY IT! It's bad for the environment", "2018-01-04 00:00:00-05", "metslover", "first.last@gmail.com", 8, 0, 1); --8
INSERT INTO answers (id, body, answer_date, answerer_name, email, helpfulness, reported, question_id) VALUES (4, "Suede", "2018-11-04 00:00:00-04", "metslover", "first.last@gmail.com", 7, 0, 1); --57
INSERT INTO answers (id, body, answer_date, answerer_name, email, helpfulness, reported, question_id) VALUES (5, "I wouldn't machine wash it", "2018-03-08 00:00:00-05", "ceasar", "first.last@gmail.com", 0, 0, 5); --95

-- TABLESPACE pg_default;

-- ALTER TABLE public.answers
--     OWNER to postgres;

-- CREATE TABLE public.photos
CREATE TABLE photos
(
    id integer NOT NULL,
    url character varying(255) NOT NULL,
    product_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT photos_answer_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.answers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        -- NOT VALID
);

INSERT INTO photos (id, url, product_id) VALUES (1, "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80", 1);
INSERT INTO photos (id, url, product_id) VALUES (2, "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", 1);
INSERT INTO photos (id, url, product_id) VALUES (3, "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80", 1);

-- TABLESPACE pg_default;

-- ALTER TABLE public.photos
--     OWNER to postgres;
