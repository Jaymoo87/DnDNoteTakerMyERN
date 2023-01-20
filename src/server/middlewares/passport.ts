import passport from "passport";
import PassportLocal from "passport-local";
import { Express } from "express";
import db from "../db";
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

          if (!userFound) {
            done(null, false);
          }
          if (!(await bcrypt.compare(password, userFound.password))) {
            done(null, false);
          }
          delete userFound.password;
          done(null, userFound);
        } catch (error) {
          done(error);
        }
      }
    )
  );

  app.use(passport.initialize());
}
