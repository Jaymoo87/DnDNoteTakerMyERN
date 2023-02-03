import passport from "passport";
import PassportLocal from "passport-local";
import PassportJWT from "passport-jwt";
import { Express } from "express";
import db from "../db";
import config from "../config";
import bcrypt from "bcrypt";

export function configurePassport(app: Express) {
  passport.use(
    new PassportLocal.Strategy(
      {
        usernameField: "email",
        session: false,
      },
      async (email, password, done) => {
        try {
          const [userFound] = await db.user.find("email", email);

          if (userFound && (await bcrypt.compare(password, userFound.password))) {
            delete userFound.password;
            return done(null, userFound);
          }
          done(null, false, { message: "invalid creds" });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    new PassportJWT.Strategy(
      {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
      },
      (payload, done) => {
        try {
          done(null, payload);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  app.use(passport.initialize());
}
