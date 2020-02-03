import logging
import celeberties

from telegram import Update
from telegram.ext import CommandHandler, CallbackContext, MessageHandler, \
    Filters, Updater

import bot_settings

logging.basicConfig(
    format='[%(levelname)s %(asctime)s %(module)s:%(lineno)d] %(message)s',
    level=logging.INFO)

logger = logging.getLogger(__name__)
# connect to the api
updater = Updater(token=bot_settings.BOT_TOKEN, use_context=True)
dispatcher = updater.dispatcher

#update is the update
def start(update: Update, context: CallbackContext):
    #we can get the id from them
    chat_id = update.effective_chat.id
    logger.info(f"> Start chat #{chat_id}")
    #can send a message back to them
    context.bot.send_message(chat_id=chat_id, text="Hello! Enter a celebrity name and I'll tell you her age!")


def respond(update: Update, context: CallbackContext):
    chat_id = update.effective_chat.id
    #if the they send a string message it will be saved here
    text = update.message.text
    logger.info(f"= Got on chat #{chat_id}: {text!r}")
    response = celeberties.celeb(text)
    context.bot.send_message(chat_id=update.message.chat_id, text=response)

#like an event handler
# if somebody /start
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)
#if somebody sends a message as text
echo_handler = MessageHandler(Filters.text, respond)
dispatcher.add_handler(echo_handler)

logger.info("* Start polling...")
# connect to the telegram server
updater.start_polling()  # Starts polling in a background thread.
# or close with the red square in pycharm
updater.idle()  # Wait until Ctrl+C is pressed
logger.info("* Bye!")