package com.utility;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Log {

	public static Logger log = LogManager.getLogger();

	 public static void logInfo(String message) {

			log.info(message);

			}

	 public static void warn(String message) {

	    log.warn(message);

		}

	 public static void error(String message) {

	    log.error(message);

		}

	 public static void fatal(String message) {

	    log.fatal(message);

		}

	 public static void debug(String message) {

	    log.debug(message);

		}
	
}
