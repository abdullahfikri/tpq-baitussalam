const LogsModel = require('../model/LogsModel.js');
const UserModel = require('../model/user.js');

class Logs {
    constructor(uuid_user, message, waktu) {
        this.uuid_user = uuid_user;
        this.message = message;
        this.waktu = waktu;
    }

    async create() {
        try {
            const result = await LogsModel.create({
                uuid_user: this.uuid_user,
                message: this.message,
                waktu: this.waktu,
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    static async getLogsPerPage(req, res) {
        try {
            const { page } = req.query;
            const LIMIT = 7;
            const startIndex = (+page - 1) * LIMIT;
            const totalLogs = await LogsModel.count();

            const logs = await LogsModel.findAll({
                limit: LIMIT,
                offset: startIndex,
                include: [
                    { model: UserModel, attributes: ['uuid_user', 'fullName'] },
                ],
                order: [['createdAt', 'DESC']],
            });

            res.status(200).json({
                logs,
                currentPage: +page,
                numberOfPages: Math.ceil(totalLogs / LIMIT),
                startIndex: startIndex + 1,
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = Logs;
